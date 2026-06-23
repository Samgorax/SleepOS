# Admin Architecture

## Modules

- CRM: leads, contact submissions, segmentation, follow-up queue
- Customers: profiles, order history, referral tree, coin balance
- Products: catalog CRUD, pricing, stock, media, attributes
- Orders: fulfillment, payment reconciliation, returns, invoice generation
- Inventory: warehouse stock, low-stock alerts, forecasting
- Referrals: campaigns, payouts, status review
- Loyalty: rules engine, tiering, earn/burn tracking
- Warranty: registrations, claims, QR passport lifecycle
- Analytics: funnel, retention, product trends, channel performance
- Blog Management: posts, drafts, tags, publishing workflow

## Permissions

- `super_admin`: platform-wide control
- `admin`: operations management
- `catalog_manager`: products and inventory
- `support_agent`: CRM, warranty, customer issues
- `content_editor`: blogs and content
- `finance_admin`: payments, refunds, settlements

## Technical Notes

- Use server-side authorization checks on every admin API
- Centralize audit logging for creates, updates, deletes, exports
- Prefer optimistic UI with reconciliation from backend truth

