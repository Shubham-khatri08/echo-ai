import { query, mutation } from "./_generated/server";

export const getMany = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await ctx.db.insert("users", {
      name: "Khatri",
    });
    return userId;
  },
});
