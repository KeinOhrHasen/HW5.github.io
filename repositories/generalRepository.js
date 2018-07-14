function Repository() {}
Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.updatebyId = updatebyId;
Repository.prototype.createNew = createNew;
Repository.prototype.deleteById = deleteById;



function getAll(callback) {
    let model = this.model;
    let query = model.find();
    query.exec(callback);
    }

function getById(id, callback) {
    let model = this.model;
    let query = model.findById(id)
    query.exec(callback);
    }
    
function updatebyId(id, body, callback) {
    let model = this.model;
    let query = model.findByIdAndUpdate(id, body, {new:true});
    query.exec(callback);
    }
function createNew(data, callback) { 
    let model = this.model;
    let query = model(data).save();
    query.exec(callback);
    }

function deleteById(id, callback){
    let model = this.model;
    let query = model.remove({_id: id})
    query.exec(callback);
    }


module.exports = Repository;