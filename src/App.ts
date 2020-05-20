import path from 'path'
import fs from 'fs-extra'

export default class App {
    constructor() {

    }
    run() {

    }
    async get() {

        const project = path.join(__dirname, './src/temp/project');//组件的全局路径
        let vueContent = await fs.readFile(`${project}/h5.vue`, 'utf8');
        console.warn(vueContent);

    }
}