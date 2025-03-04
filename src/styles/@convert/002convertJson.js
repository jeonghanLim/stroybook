const fs = require('fs');
const path = require('path');

// JSON 파일 경로
const jsonFilePath = './002system.Mode 1.tokens.json';

const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

let cssIdx = 0; // 주석 번호를 위한 인덱스

// JSON을 CSS로 변환하는 함수
function convertJsonToCss(json, depth = 1) {
    let cssContent = '';
    const paddingValues = {};
    
    for (const key in json) {
        if (typeof json[key] === 'object' && !json[key]['$value']) {
            console.log("Processing key:", key, "| Depth before recursion:", depth);
            
            cssIdx++;
            
            // 2뎁스 주석 추가
            if (depth === 1) {
                cssContent += `\n    /* ${cssIdx}. ${key.toUpperCase()} */\n`;
                cssContent += `    /* ${'='.repeat(20)} */\n\n`;
            }
            // 3뎁스 주석 추가
            else if (depth === 2) {
                cssContent += `    /* ${key} */\n`;
            }
            
            // depth 값을 증가시켜 재귀 호출
            cssContent += convertJsonToCss(json[key], depth + 1);
            
            console.log("Processing key:", key, "| Depth after recursion:", depth + 1);
        } else if (json[key]['$value']) {
            let cssVarName = `${key.replace(/\./g, '-')}`;
            let cssValue = json[key]['$value'].replace(/[{}]/g, '').replace(/,(?=\d)/g, '.');
            
            // 앞 단어 제거 (예: {size.spacing.0,5} -> spacing.0.5)
            let valueParts = cssValue.split('.');
            cssValue = valueParts.slice(1).join('.');
            
            // spacing 값 변환: * 뒤에는 숫자만 오도록 변경
            if (cssValue.includes('spacing')) {
                let numericValue = cssValue.replace(/.*spacing\./, '');
                cssValue = `calc(var(--spacing) * ${numericValue})`;
            } else {
                cssValue = `var(--${cssValue.replace(/\./g, '-')})`;
            }
            
            // y와 x 값을 분리하여 처리
            if (key.endsWith('-y')) {
                let baseKey = key.replace('-y', '');
                paddingValues[baseKey] = paddingValues[baseKey] || {};
                paddingValues[baseKey].y = cssValue;
                continue;
            } else if (key.endsWith('-x')) {
                let baseKey = key.replace('-x', '');
                paddingValues[baseKey] = paddingValues[baseKey] || {};
                paddingValues[baseKey].x = cssValue;
                continue;
            }
            // 'non' 감지 시 주석 추가
            let comment = cssValue.includes('non') ? ' /* 감지용 */' : '';
            cssContent += `    ${cssVarName}: ${cssValue};${comment}\n`;
        }
    }
    
    // y, x 값이 있는 padding을 하나로 합쳐서 출력
    for (const key in paddingValues) {
        if (paddingValues[key].y && paddingValues[key].x) {
            cssContent += `    ${key}: ${paddingValues[key].y} ${paddingValues[key].x};\n`;
        }
    }
    
    return cssContent;
}

// 각 최상위 키마다 개별 CSS 파일을 style/002system 폴더에 저장
const outputDir = path.join(__dirname, '../002system');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

for (const topKey in jsonData) {
    const cssFilePath = path.join(outputDir, `${topKey}.css`);
    const cssContent = `@import "tailwindcss";\n@import "../001reference/color.css";\n@import "../001reference/font.css";\n@import "../001reference/size.css";\n@import "../001reference/fontType.css";\n\n@theme {\n${convertJsonToCss(jsonData[topKey], 1)}}\n`;
    
    // CSS 파일 저장
    fs.writeFileSync(cssFilePath, cssContent, 'utf8');
    console.log(`CSS 파일이 생성되었습니다: ${cssFilePath}`);
}
