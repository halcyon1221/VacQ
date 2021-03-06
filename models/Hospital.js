const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50,'Name can not be mpre than 50 characters']
    },
    address: {
        type: String,
        required: [true,'Please add an address']
    },
    district: {
        type: String,
        required: [true,'Please add a districe']
    },
    province: {
        type: String,
        required: [true,'Please add a province']
    },
    postalcode: {
        type: String,
        required: [true,'Please add a postalcode'],
        maxlenght: [5,'Postal Code can not be more than 5 digits']
    },
    tel: {
        type: String
    },
    region: {
        type: String,
        required: [true,'Please add a region']
    }
},{
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
});

//Reversepopulate with virtuals
HospitalSchema.virtual('appointments',{
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'hospital',
    justOne: false
});

//Cascade delete appointment when delete hospital
HospitalSchema.pre('remove',async function(next){
    console.log(`Appointmentts being removed from hospital ${this._id}`);
    await this.model('Appointment').deleteMany({hospital:this._id});
    next();
});

module.exports = mongoose.model('Hospital', HospitalSchema);