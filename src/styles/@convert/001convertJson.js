const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../001reference'); // 저장될 폴더 경로

async function convertJsonToCss(json) {
    // 저장 경로 폴더가 없으면 생성
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const [category, subcategories] of Object.entries(json)) {
        let cssContent = `@import "tailwindcss";
@import "./fontType.css";

@theme {

    /* ===================== */
    /* ${category.toUpperCase()} THEME */
    /* ===================== */

`;

        function extractValues(obj, keyPath = []) {
            if (category === "size" && keyPath.includes("spacing")) {
                if (obj["1"] && obj["1"].$value) {
                    const spacingValue = convertToRem(obj["1"].$value);
                    cssContent += `    /* ===================== */
    /* SPACING 기준 값 */
    /* (${obj["1"].$value} = ${spacingValue}) */
    /* ===================== */
    --spacing: ${spacingValue};
`;
                }
                return; // spacing 속성 제외하고 기준 값만 추가
            }

            for (const [key, value] of Object.entries(obj)) {
                const newKeyPath = [...keyPath, key];

                if (value && typeof value === 'object' && !value.$value) {
                    extractValues(value, newKeyPath);
                } else if (value.$value) {
                    let fullKey = newKeyPath.join('-');
                    let cssValue = value.$value;

                    // leading 변환 (px → % 단순 치환)
                    if (fullKey.includes('leading') && typeof cssValue === 'string') {
                        cssValue = cssValue.replace('px', '%');
                    } 

                    // {} 안의 변수 변환
                    else if (typeof cssValue === 'string' && cssValue.startsWith('{') && cssValue.endsWith('}')) {
                        let referenceValue = cssValue.slice(1, -1).split('.');
                        referenceValue.shift(); // 첫 번째 요소 제거
                        cssValue = `var(--${referenceValue.join('-')})`;
                    } 

                    // 일반적인 px → rem 변환
                    else {
                        cssValue = convertToRem(cssValue);
                    }

                    // font-family의 경우 ""로 감싸기
                    if (fullKey.includes('fontfamily')) {
                        cssValue = `"${cssValue}"`;
                    }

                    cssContent += `    --${fullKey} : ${cssValue};
`;
                }
            }
        }

        extractValues(subcategories);

        cssContent += `}
`;
        const filePath = path.join(outputDir, `${category}.css`);
        await fs.promises.writeFile(filePath, cssContent);
        console.log(`CSS 파일이 생성되었습니다: ${filePath}`);
    }
}

function convertToRem(value) {
    if (typeof value === 'string' && value.includes('px')) {
        let pxValue = parseInt(value.replace('px', ''), 10);
        return `${pxValue / 16}rem`;
    }
    return value;
}

// 외부 JSON 파일 읽기
const jsonFilePath = path.join(__dirname, '001reference.Mode 1.tokens.json'); // JSON 파일 경로
fs.readFile(jsonFilePath, 'utf8', async (err, data) => {
    if (err) {
        console.error('JSON 파일을 읽는 도중 오류가 발생했습니다:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        await convertJsonToCss(jsonData);
    } catch (parseError) {
        console.error('JSON 파싱 오류:', parseError);
    }
});
