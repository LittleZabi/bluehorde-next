import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    notifyme: { type: Boolean, required: false },
    active: { type: Boolean, required: true, default: false },
    code: { type: Number, required: true },
  },
  {
    timestamps: true,
    strict: false,
  }
);
const visitorsSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true },
    visits: { type: Number, required: true },
  },
  {
    timestamps: true,
    strict: false,
  }
);
const reviewsSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    comment: { type: Object, required: true },
    ip: { type: String, required: true },
    location: { type: Object, required: false },
    post_id: { type: String, required: true },
  },
  {
    timestamps: true,
    strict: false,
  }
);
const laptopsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: Object, required: true },
    category: { type: Object, required: true },
    slug: { type: Object, required: true },
    original: { type: String, required: false },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const smartSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brief_scrap: { type: Object, required: true },
    mobile_specs: { type: Object, required: true },
    mobile_pricing: { type: Object, required: true },
    original: { type: String, required: false },
  },
  {
    timestamps: true,
    strict: false,
  }
);
const watchesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brief_scrap: { type: Object, required: true },
    mobile_specs: { type: Object, required: true },
    mobile_pricing: { type: Object, required: true },
    original: { type: String, required: false },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const categoriesSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    items: { type: Number, required: true, default: 0 },
    image: { type: String, required: true, default: "" },
  },
  {
    timestamps: true,
    strict: false,
  }
);
export const categoriesModal: any =
  mongoose.models.categories || mongoose.model("categories", categoriesSchema);
export const laptopsModal: any =
  mongoose.models.laptops || mongoose.model("laptops", laptopsSchema);

export const smartModal: any =
  mongoose.models.mobile_devices ||
  mongoose.model("mobile_devices", smartSchema);
export const watchesModal: any =
  mongoose.models.smart_watches ||
  mongoose.model("smart_watches", watchesSchema);
export const reviewsModal: any =
  mongoose.models.reviews || mongoose.model("reviews", reviewsSchema);
export const visitorsModal: any =
  mongoose.models.visitors || mongoose.model("visitors", visitorsSchema);
export const Users: any =
  mongoose.models.users || mongoose.model("users", usersSchema);
