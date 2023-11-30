import mongoose from "mongoose";

// {
//     "id": 1,
//     "first_name": "Anet",
//     "last_name": "Doe",
//     "email": "adoe0@comcast.net",
//     "gender": "Female",
//     "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
//     "domain": "Sales",
//     "available": false
//   },

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  domain: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", UserSchema);
