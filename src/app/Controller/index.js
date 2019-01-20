import LoginContoller from './loginContoller.js'
import OverTimeContoller from './overTimeContoller.js'
export default class App {
    constructor () {
        const loginContoller = new LoginContoller()
        const overTimeContoller = new OverTimeContoller()
    }
}