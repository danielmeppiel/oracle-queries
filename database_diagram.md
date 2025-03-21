# Database Schema for Best-Selling Products

```mermaid
erDiagram
    PRODUCTS {
        NUMBER product_id PK
        NUMBER category_id FK
        VARCHAR2 sku
        VARCHAR2 name
        VARCHAR2 description
        NUMBER weight
        VARCHAR2 dimensions
        CHAR is_active
        TIMESTAMP created_at
    }
    
    PRODUCT_CATEGORIES {
        NUMBER category_id PK
        VARCHAR2 name
        VARCHAR2 description
        NUMBER parent_category_id FK
        TIMESTAMP created_at
    }
    
    ORDERS {
        NUMBER order_id PK
        NUMBER customer_id FK
        NUMBER employee_id FK
        TIMESTAMP order_date
        NUMBER status_id FK
        NUMBER total_amount
        VARCHAR2 shipping_address
        VARCHAR2 billing_address
        TIMESTAMP created_at
    }
    
    ORDER_ITEMS {
        NUMBER item_id PK
        NUMBER order_id FK
        NUMBER product_id FK
        NUMBER quantity
        NUMBER unit_price
        NUMBER discount_amount
        TIMESTAMP created_at
    }
    
    ORDER_STATUS {
        NUMBER status_id PK
        VARCHAR2 status_name
        VARCHAR2 description
    }

    PRODUCTS ||--o{ ORDER_ITEMS : "has"
    PRODUCT_CATEGORIES ||--o{ PRODUCTS : "contains"
    PRODUCT_CATEGORIES ||--o{ PRODUCT_CATEGORIES : "has parent"
    ORDERS ||--o{ ORDER_ITEMS : "contains"
    ORDER_STATUS ||--o{ ORDERS : "has"
```

This diagram shows the core tables needed for analyzing best-selling products. The main relationships are:

1. Products belong to Product Categories (which can have parent categories)
2. Orders contain Order Items, which reference specific Products
3. Orders have a Status from Order_Status table
4. Order Items track quantity and price for each product in an order