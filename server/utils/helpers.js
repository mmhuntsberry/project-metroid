import jwt from "jsonwebtoken";
export const APP_SECRET = "samusaran";

export const getUserId = (context) => {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error("Not authenticated");
};

// no longer used but maybe helpful for the future
export const reduceFilter = (parent, list) => {
  return parent.reduce((filtered, id) => {
    list.filter((item) => {
      if (item.id === id) {
        filtered.push(item);
      }
    });

    return filtered;
  }, []);
};
