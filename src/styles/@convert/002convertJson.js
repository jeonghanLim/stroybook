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
    const directionalValues = {};
    
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
            
            // -yTop, -xRight, -yBottom, -xLeft, -x, -y 값을 분리하여 저장
            if (/(?:-yTop|-xRight|-yBottom|-xLeft|-x|-y)$/.test(key)) {
                let baseKey = key.replace(/-(yTop|xRight|yBottom|xLeft|x|y)$/, '');
                let direction = key.match(/(yTop|xRight|yBottom|xLeft|x|y)$/)[0];

                directionalValues[baseKey] = directionalValues[baseKey] || {};
                
                // -y가 들어오면 yTop과 yBottom에 동일한 값 적용
                if (direction === 'y') {
                    directionalValues[baseKey]['yTop'] = cssValue;
                    directionalValues[baseKey]['yBottom'] = cssValue;
                } else if (direction === 'x') {
                    directionalValues[baseKey]['xRight'] = cssValue;
                    directionalValues[baseKey]['xLeft'] = cssValue;
                } else {
                    directionalValues[baseKey][direction] = cssValue;
                }
                continue;
            }
            
            // 'non' 감지 시 주석 추가
            let comment = cssValue.includes('non') ? ' /* 감지용 */' : '';
            cssContent += `    ${cssVarName}: ${cssValue};${comment}\n`;
        }
    }
    
    // -yTop, -xRight, -yBottom, -xLeft 값이 있는 경우 시계 방향으로 병합
    for (const key in directionalValues) {
        let { yTop = "calc(var(--spacing) * 0)", xRight = "calc(var(--spacing) * 0)", 
              yBottom = yTop, xLeft = xRight } = directionalValues[key];
        
        // 최종 CSS 출력
        cssContent += `    ${key}: ${yTop} ${xRight} ${yBottom} ${xLeft};\n`;
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
