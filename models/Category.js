const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    timestamps: {
        // type: Date,
        // default: Date.now
        timestamps: true
    }
});

// categorySchema.pre('validate', function(next) {
//     this.slug = slugify(this.name, { lower: true });
//     next();
// });

// categorySchema.pre('validate', function () {
//     if (this.name) {
//         this.slug = slugify(this.name, { lower: true });
//     }
// });

categorySchema.pre('validate', function (next) {
    if (this.name) {
        this.slug = slugify(this.name, { lower: true });
    }
    next();
});


module.exports = mongoose.model('Category', categorySchema);


