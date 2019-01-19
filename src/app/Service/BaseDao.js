import mysql from 'mysql'
export default class BaseDao {
    constructor () {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            database : 'test'
        })
    }
    insertObj (obj) {
        const keyList = []
        const valueList = []
        Object.entries(obj).map(([key, item]) => {
            keyList.push(key)
            if (typeof item === 'string') {
                valueList.push(`'${item}'`)
            } else if (typeof item === 'number') {
                valueList.push(item)
            } else {
                return
            }
        })
        console.log(`INSERT INTO ${this.tableName} (${keyList.join(',')}) VALUES(${valueList.join(',')});`)
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO overtime_record (${keyList.join(',')}) VALUES(${valueList.join(',')});`, (error, results, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                }
            })          
        })
    }
}