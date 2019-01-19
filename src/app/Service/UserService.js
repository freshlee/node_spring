import BaseDao from './BaseDao'
function Dao (target) {
    return function (value) {
        value.tableName = target
    }
}
@Dao('user')
export default class extends BaseDao {
    constructor(...params) {
        super(...params)
    }
}