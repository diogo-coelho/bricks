import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function execute () {
	const folders = fs.readdirSync(path.resolve(__dirname, 'icons/svgs'))
	for (let i = 0; i < folders.length; i++) {
		// Criar uma pasta dentro do repositório icons
		if (!fs.existsSync(path.resolve(__dirname, 'icons/' + folders[i]))){
			fs.mkdirSync(path.resolve(__dirname, 'icons/' + folders[i]))
		}

		let files = fs.readdirSync(path.resolve(__dirname, 'icons/svgs/' + folders[i]))
		let fileNames = []
		for (let j = 0; j < files.length; j++) {
			console.log()
			let arrayFileName = files[j].replace('.svg','').split('-')	
			arrayFileName = arrayFileName.map(string => { return string.charAt(0).toUpperCase() + string.slice(1) })
			let fileName = `BrIcon${ arrayFileName.toString().replace(/\,/g,'') }`

			// Leio a tag svg dentro do arquivo original
			let svgContent = fs.readFileSync(path.resolve(__dirname, 'icons/svgs/' + folders[i] + '/' + files[j]), { encoding: 'utf8', flag: 'r' })

			const content = `
			<template>
				${ svgContent }\r\n
			</template>

			<script lang="ts">
			import { defineComponent } from 'vue'

			export default defineComponent({
				name: '${ fileName }',
			})
			</script>
			`
			fs.writeFileSync(path.resolve(__dirname, 'icons/' + folders[i] + '/' + fileName + '.vue'), content)
			console.log(`Arquivo ${fileName}.vue foi criado`)
			fileNames.push(fileName)	
		}

		// Criando o conteúdo do arquivo index.ts
		console.log(fileNames)
		let imports = ''
		let installs = ''
		let exports = ''
		for (let x = 0; x < fileNames.length; x++) {
			imports += `import ${ fileNames[x] } from './${ fileNames[x] }.vue';\r\n`
			installs += `app.component(${ fileNames[x] }.name, ${ fileNames[x] });\r\n`
			exports += `${ fileNames[x] }, `
		}

		const script = `
			import { App, Plugin } from 'vue'
			${ imports }

			export default {
				install(app: App) {
					${ installs }
				},
			} as Plugin;

			export { ${ exports } };
		`
		fs.writeFileSync(path.resolve(__dirname, 'icons/' + folders[i] + '/index.ts'), script)
		console.log('Arquivo index criado')
	}
}

execute()