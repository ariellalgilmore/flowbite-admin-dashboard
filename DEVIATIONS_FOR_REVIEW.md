# Deviations for Review

## Purpose
This document consolidates migration deviations requiring reviewer attention for job `d1j7cl36`.

## Summary
- Total entries: 6
- Design entries: 0
- Architecture entries: 6
- Contributing agents: front-end-developer

## Architecture deviations

1. Hugo static site converted to Carbon React without React runtime infrastructure. All 54 HTML template files converted to TSX components with Carbon v11 imports, but no build system, routing, or React app scaffold exists. This is a partial migration requiring framework-era-swap completion.
   - File: `content/authentication/sign-in.tsx`
   - Lines: 1-109
   - Agent: front-end-developer
   - What the system did: partial-migration

2. Hugo template converted to Carbon React TSX without React runtime. File uses Carbon Form, TextInput, Button, Link, Theme components with @carbon/react imports. No build system, routing, or app scaffold exists.
   - File: `content/authentication/forgot-password.tsx`
   - Lines: 1-95
   - Agent: front-end-developer
   - What the system did: partial-migration

3. Hugo template converted to Carbon React TSX without React runtime. File uses Carbon Form, TextInput, Button, Link, Theme components with @carbon/react imports. No build system, routing, or app scaffold exists.
   - File: `content/authentication/reset-password.tsx`
   - Lines: 1-103
   - Agent: front-end-developer
   - What the system did: partial-migration

4. Hugo template converted to Carbon React TSX without React runtime. File uses Carbon Form, TextInput, Button, Checkbox, Link, Theme components with @carbon/react imports. No build system, routing, or app scaffold exists.
   - File: `content/authentication/sign-up.tsx`
   - Lines: 1-125
   - Agent: front-end-developer
   - What the system did: partial-migration

5. Hugo template converted to Carbon React TSX without React runtime. File uses Carbon Form, TextInput, Button, Link, Theme components with @carbon/react imports. No build system, routing, or app scaffold exists.
   - File: `content/authentication/profile-lock.tsx`
   - Lines: 1-105
   - Agent: front-end-developer
   - What the system did: partial-migration

6. Hugo template with Go template loops converted to Carbon React TSX without React runtime. File uses Carbon DataTable, Modal, Dropdown, TextInput, TextArea, Pagination, Breadcrumb, Button, Checkbox, Theme with @carbon/react imports and icons from @carbon/icons-react. Mock data replaces Hugo data source. No build system, routing, or app scaffold exists.
   - File: `content/crud/products.tsx`
   - Lines: 1-285
   - Agent: front-end-developer
   - What the system did: partial-migration
