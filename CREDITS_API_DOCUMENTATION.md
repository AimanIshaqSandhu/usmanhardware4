# Credits Page - API Documentation

Base URL: `https://usmanhardware.site/wp-json/ims/v1`

## APIs Required for Credits Page Functionality

### 1. Get All Customers (with Balances)
**Endpoint:** `/customers`  
**Method:** `GET`  
**Description:** Fetches all customers, filtered by status

**Query Parameters:**
- `limit` (number, optional): Number of records per page (default: 1000)
- `status` (string, optional): Filter by status ('active' or 'inactive')
- `page` (number, optional): Page number for pagination

**Response:**
```json
{
  "success": true,
  "data": {
    "customers": [
      {
        "id": 1,
        "name": "Ahmad Furniture Store",
        "email": "ahmad@furniture.com",
        "phone": "+92-322-6506118",
        "type": "Permanent",
        "address": "123 Main Street",
        "city": "Karachi",
        "status": "active",
        "creditLimit": 500000,
        "currentBalance": 25000,
        "totalPurchases": 750000,
        "lastPurchase": "2024-12-28",
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 100,
      "itemsPerPage": 20
    }
  }
}
```

---

### 2. Create Customer
**Endpoint:** `/customers`  
**Method:** `POST`  
**Description:** Creates a new customer

**Request Body:**
```json
{
  "name": "Customer Name",
  "phone": "+92-322-6506118",
  "email": "customer@example.com",
  "type": "Permanent",
  "status": "active",
  "creditLimit": 0,
  "currentBalance": 0,
  "address": "Customer Address",
  "city": "Karachi"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 123,
    "name": "Customer Name",
    "phone": "+92-322-6506118",
    "email": "customer@example.com",
    "type": "Permanent",
    "status": "active",
    "creditLimit": 0,
    "currentBalance": 0,
    "totalPurchases": 0,
    "createdAt": "2024-12-28T10:30:00Z"
  },
  "message": "Customer created successfully"
}
```

---

### 3. Update Customer Balance
**Endpoint:** `/customers/update-balance`  
**Method:** `POST`  
**Description:** Updates customer balance with transaction tracking

**Request Body:**
```json
{
  "customerId": 123,
  "orderId": 456,
  "amount": 5000,
  "type": "credit",
  "orderNumber": "ORD-20241228001",
  "description": "Manual payment recorded - cash",
  "includesTax": false
}
```

**Parameters:**
- `customerId` (number, required): Customer ID
- `orderId` (number, optional): Related order ID
- `amount` (number, required): Transaction amount
- `type` (string, required): Transaction type - 'credit' (adds to balance), 'debit' (reduces balance), or 'adjustment'
- `orderNumber` (string, optional): Related order number
- `description` (string, required): Transaction description
- `includesTax` (boolean, optional): Whether amount includes tax (default: false)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 789,
    "customerId": 123,
    "orderId": 456,
    "amount": 5000,
    "type": "credit",
    "orderNumber": "ORD-20241228001",
    "description": "Manual payment recorded - cash",
    "previousBalance": 25000,
    "newBalance": 30000,
    "createdAt": "2024-12-28T10:30:00Z",
    "createdBy": "Admin"
  },
  "message": "Balance updated successfully"
}
```

---

### 4. Get Customer Balance Details
**Endpoint:** `/customers/{customerId}/balance-details`  
**Method:** `GET`  
**Description:** Retrieves detailed balance information for a specific customer

**URL Parameters:**
- `customerId` (number, required): Customer ID

**Response:**
```json
{
  "success": true,
  "data": {
    "customerId": 123,
    "currentBalance": 25000,
    "creditLimit": 500000,
    "availableCredit": 475000,
    "totalPurchases": 750000,
    "lastTransactionDate": "2024-12-28T10:30:00Z",
    "transactions": [
      {
        "id": 789,
        "customerId": 123,
        "orderId": 456,
        "amount": 5000,
        "type": "credit",
        "orderNumber": "ORD-20241228001",
        "description": "Manual payment recorded",
        "previousBalance": 20000,
        "newBalance": 25000,
        "createdAt": "2024-12-28T10:30:00Z"
      }
    ]
  }
}
```

---

### 5. Get Customer Transaction History
**Endpoint:** `/customers/{customerId}/balance-history`  
**Method:** `GET`  
**Description:** Retrieves transaction history for a specific customer

**URL Parameters:**
- `customerId` (number, required): Customer ID

**Query Parameters:**
- `limit` (number, optional): Number of transactions to return (default: 50)
- `offset` (number, optional): Offset for pagination (default: 0)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 789,
      "customerId": 123,
      "orderId": 456,
      "amount": -5000,
      "type": "payment",
      "orderNumber": "ORD-20241228001",
      "description": "Payment received - cash",
      "balanceAfter": 20000,
      "notes": "Customer paid in cash",
      "reference": "CASH-12345",
      "createdAt": "2024-12-28T10:30:00Z",
      "createdBy": "Admin"
    },
    {
      "id": 788,
      "customerId": 123,
      "orderId": 455,
      "amount": 5000,
      "type": "credit",
      "orderNumber": "ORD-20241227001",
      "description": "Order on credit",
      "balanceAfter": 25000,
      "notes": "Customer order",
      "createdAt": "2024-12-27T14:20:00Z"
    }
  ]
}
```

---

### 6. Sync All Customer Balances
**Endpoint:** `/customers/sync-balances`  
**Method:** `POST`  
**Description:** Recalculates and synchronizes all customer balances based on their orders

**Request Body:**
```json
{
  "includesTax": false,
  "recalculateAll": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "updated": 45,
    "errors": 0
  },
  "message": "Customer balances synchronized successfully"
}
```

---

## Additional Notes

### Payment Method Values
- `cash` - Cash payment
- `credit` - Credit/Receivable
- `bank` - Bank transfer
- `cheque` - Cheque payment
- `online` - Online payment

### Customer Type Values
- `Permanent` - Regular permanent customer
- `Semi-Permanent` - Semi-permanent customer
- `Temporary` - One-time or temporary customer

### Customer Status Values
- `active` - Active customer
- `inactive` - Inactive customer

### Transaction Types
- `credit` - Increases customer balance (customer owes more)
- `debit` - Decreases customer balance (customer pays/owes less)
- `adjustment` - Manual balance adjustment
- `payment` - Payment received from customer

---

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

Common HTTP status codes:
- `200` - Success
- `400` - Bad Request (invalid parameters)
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## Implementation Priority

1. **Critical (Must Have):**
   - GET `/customers` - Required for displaying customer list
   - GET `/customers/{customerId}/balance-history` - Required for transaction history modal

2. **High Priority:**
   - POST `/customers` - Required for adding new customers
   - POST `/customers/update-balance` - Required for recording payments and credits
   - POST `/customers/sync-balances` - Required for balance synchronization

3. **Medium Priority:**
   - GET `/customers/{customerId}/balance-details` - Can fallback to basic customer info

---

## Testing Checklist

- [ ] Fetch customers with credits (currentBalance > 0)
- [ ] Create new customer with initial balance
- [ ] Record payment (reduce balance)
- [ ] Add credit/receivable (increase balance)
- [ ] View transaction history
- [ ] Sync all balances
- [ ] Search customers by name, phone, or email
- [ ] Filter customers by type
- [ ] Send WhatsApp message to customer
