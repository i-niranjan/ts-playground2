// Partials
//Evertyhing is optional
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UpdateUserInput = Partial<User>;

// const updateUser = (user: UpdateUserInput) => {
//   console.log(user.id, user.name);
// };

// Required
//Every parameter is required
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UpdateUserInput = Required<User>;

// const updateUser = (user: UpdateUserInput) => {
//   console.log(user.id, user.name);
// };

// ReadOnly
//You can access them, but you can’t modify them.
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UpdateUserInput = Readonly<User>;

// const user: UpdateUserInput = {
//   id: 1,
//   name: "Zed",
//   email: "zed@gmail.com",
// };

//Pick
//Super handy guy just pick the types of already declared types
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
// };

// type PublicUser = Pick<User, "id" | "name">;

//Omit
//Reverse of Pick just removes the selected type
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
// };

// type SafeUser = Omit<User, "password">; //now safeUser is gonna be without pass

//Record
// Creates an object type with keys of type K and all values of type T.
// type Fruit = "apple" | "banana" | "orange";

// const fruitPrices: Record<Fruit, number> = {
//   apple: 100,
//   banana: 50,
//   orange: 80,
// };

//Exclude
// Takes a union type and removes one or more types from it. just like omit , difference is
// omit works on object type this works on union type

// type Role = "admin" | "user" | "guest";

// type NonGuestRoles = Exclude<Role, "guest">;

//Extract
//Works on common types of T and K
// type AllRoles = "admin" | "editor" | "user" | "guest";
// type AdminRoles = "admin" | "editor";

// type HighPrivilege = Extract<AllRoles, AdminRoles>; //High privilege has admin & editor

//NonNullable<T>
//Dont accept undefined or null things
// type User = {
//   id: number;
//   name: string | null;
// };

// function greetUser(user: User) {
//   if (user.name === null) {
//     return;
//   }
//   const name: NonNullable<typeof user.name> = user.name; // we have to do null check here
//   console.log(`Hello ${name}`);
// }

//Parameter
//Extracts the parameter types of a function type as a tuple.
// const customBaseQuery = async (
//   args: Parameters<typeof baseQuery>[0],
//   api: BaseQueryApi,
//   extraOptions: Parameters<typeof baseQuery>[2]
// ) => {
//   const result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     api.dispatch(logout());
//     toast(`Session Expired. Please Try Again`);
//   }

//   return result;
// };

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: customBaseQuery,
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "api/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//     getProfile: builder.query({
//       query: () => "api/auth/profile",
//     }),
//   }),
// });
