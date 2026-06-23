CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(32),
    avatar_url TEXT,
    auth_provider VARCHAR(32) NOT NULL DEFAULT 'local',
    google_sub VARCHAR(255),
    role VARCHAR(32) NOT NULL DEFAULT 'customer',
    status VARCHAR(32) NOT NULL DEFAULT 'active',
    loyalty_tier VARCHAR(32) NOT NULL DEFAULT 'bronze',
    sleep_coins_balance INTEGER NOT NULL DEFAULT 0,
    referred_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(120) NOT NULL,
    slug VARCHAR(140) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    sku VARCHAR(80) UNIQUE NOT NULL,
    short_description TEXT,
    description TEXT,
    mattress_type VARCHAR(80),
    firmness VARCHAR(40),
    size_label VARCHAR(80),
    price NUMERIC(12, 2) NOT NULL,
    compare_at_price NUMERIC(12, 2),
    emi_price NUMERIC(12, 2),
    currency VARCHAR(8) NOT NULL DEFAULT 'INR',
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    warranty_months INTEGER NOT NULL DEFAULT 60,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    image_urls JSONB NOT NULL DEFAULT '[]'::jsonb,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    order_number VARCHAR(40) UNIQUE NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'pending',
    subtotal NUMERIC(12, 2) NOT NULL,
    discount_total NUMERIC(12, 2) NOT NULL DEFAULT 0,
    tax_total NUMERIC(12, 2) NOT NULL DEFAULT 0,
    shipping_total NUMERIC(12, 2) NOT NULL DEFAULT 0,
    grand_total NUMERIC(12, 2) NOT NULL,
    payment_status VARCHAR(32) NOT NULL DEFAULT 'pending',
    shipping_address JSONB NOT NULL,
    billing_address JSONB,
    placed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id),
    provider VARCHAR(32) NOT NULL DEFAULT 'razorpay',
    provider_order_id VARCHAR(120),
    provider_payment_id VARCHAR(120),
    provider_signature TEXT,
    amount NUMERIC(12, 2) NOT NULL,
    currency VARCHAR(8) NOT NULL DEFAULT 'INR',
    status VARCHAR(32) NOT NULL DEFAULT 'created',
    payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES products(id),
    user_id UUID NOT NULL REFERENCES users(id),
    rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title VARCHAR(255),
    body TEXT,
    is_verified_purchase BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE wishlist (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    product_id UUID NOT NULL REFERENCES products(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, product_id)
);

CREATE TABLE referrals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    referrer_user_id UUID NOT NULL REFERENCES users(id),
    referred_user_id UUID REFERENCES users(id),
    referral_code VARCHAR(32) UNIQUE NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'invited',
    reward_coins INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE sleep_coins (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    transaction_type VARCHAR(32) NOT NULL,
    coins INTEGER NOT NULL,
    reference_type VARCHAR(40),
    reference_id UUID,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE warranties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    product_id UUID NOT NULL REFERENCES products(id),
    order_id UUID REFERENCES orders(id),
    serial_number VARCHAR(80) UNIQUE NOT NULL,
    qr_code_url TEXT,
    warranty_start TIMESTAMPTZ NOT NULL,
    warranty_end TIMESTAMPTZ NOT NULL,
    status VARCHAR(32) NOT NULL DEFAULT 'active',
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE blogs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_id UUID REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    body TEXT NOT NULL,
    cover_image_url TEXT,
    tags JSONB NOT NULL DEFAULT '[]'::jsonb,
    status VARCHAR(32) NOT NULL DEFAULT 'draft',
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    channel VARCHAR(32) NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE b2b_clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(255) NOT NULL,
    client_type VARCHAR(40) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(32),
    gst_number VARCHAR(32),
    address JSONB,
    lifecycle_stage VARCHAR(40) NOT NULL DEFAULT 'lead',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE bulk_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    b2b_client_id UUID NOT NULL REFERENCES b2b_clients(id),
    tender_id UUID,
    quantity INTEGER NOT NULL,
    total_amount NUMERIC(12, 2) NOT NULL,
    negotiated_discount NUMERIC(5, 2) NOT NULL DEFAULT 0,
    roi_projection JSONB NOT NULL DEFAULT '{}'::jsonb,
    status VARCHAR(32) NOT NULL DEFAULT 'draft',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE tenders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source VARCHAR(80),
    title VARCHAR(255) NOT NULL,
    reference_number VARCHAR(120),
    organization VARCHAR(255),
    due_date TIMESTAMPTZ,
    value_estimate NUMERIC(12, 2),
    status VARCHAR(32) NOT NULL DEFAULT 'open',
    document_urls JSONB NOT NULL DEFAULT '[]'::jsonb,
    ai_summary JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    metric_name VARCHAR(120) NOT NULL,
    dimension VARCHAR(120),
    dimension_value VARCHAR(120),
    metric_value NUMERIC(14, 4) NOT NULL,
    captured_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE bulk_orders
ADD CONSTRAINT fk_bulk_orders_tender
FOREIGN KEY (tender_id) REFERENCES tenders(id);

CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_warranties_user_id ON warranties(user_id);
CREATE INDEX idx_tenders_due_date ON tenders(due_date);
