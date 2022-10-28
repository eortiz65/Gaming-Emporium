const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    companyId: { type: int, required: true },
    brandUrl: { type: String, required: true }
  },
  { timestamps: true }
)
