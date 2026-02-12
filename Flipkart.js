// // STEP 1: CREATE / SWITCH DATABASE
// use flipcart


// // STEP 2: CREATE COLLECTIONS
// db.createCollection("users")
// db.createCollection("orders")


// // STEP 3: INSERT SEED USERS
// db.users.insertMany([
//   {
//     name: "John",
//     email: "john@gmail.com",
//     password: "123",
//     role: "customer"
//   },
//   {
//     name: "Mike",
//     email: "mike@gmail.com",
//     password: "456",
//     role: "customer"
//   }
// ])


// // STEP 4: CREATE CART (LIKE JS CODE)
// let cart = []

// // Add iphone
// cart = [...cart, { name: "iphone", price: 45000, qty: 1 }]

// // Add speaker
// cart = [...cart, { name: "speaker", price: 1000, qty: 1 }]

// // Check cart
// cart


// // STEP 5: CREATE ORDER OBJECT
// const order = {
//   email: "john@gmail.com",
//   items: cart,
//   orderValue: 46000,
//   status: "pending",
//   orderDate: new Date()
// }


// //STEP 6
// db.orders.insertOne(order)



// // STEP 7: INSERT ANOTHER ORDER (FOR TESTING)
// db.orders.insertOne({
//   email: "mike@gmail.com",
//   items: [
//     { name: "laptop", price: 50000, qty: 1 }
//   ],
//   orderValue: 50000,
//   status: "pending",
//   orderDate: new Date()
// })


// // STEP 8: DISPLAY ALL ORDERS

// db.orders.find()



// // STEP 9: AGGREGATE - DISPLAY ORDERS OF PARTICULAR USER

// db.orders.aggregate([
//   {
//     $match: { email: "john@gmail.com" }
//   }
// ])


// // STEP 10: ADVANCED - JOIN USERS + ORDERS

// db.orders.aggregate([
//   {
//     $match: { email: "john@gmail.com" }
//   },
//   {
//     $lookup: {
//       from: "users",
//       localField: "email",
//       foreignField: "email",
//       as: "userDetails"
//     }
//   }
// ])



// // STEP 11: ADVANCED - UNWIND ITEMS
// // (SHOW EACH PRODUCT SEPARATELY)

// db.orders.aggregate([
//   { $match: { email: "john@gmail.com" } },
//   { $unwind: "$items" }
// ])


// // STEP 12: TOTAL SALES USING GROUP

// db.orders.aggregate([
//   {
//     $group: {
//       _id: null,
//       totalSales: { $sum: "$orderValue" }
//     }
//   }
// ])
