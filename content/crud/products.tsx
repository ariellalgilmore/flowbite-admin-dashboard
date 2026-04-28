import React, { useState } from 'react';
import { 
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Modal,
  TextInput,
  TextArea,
  Dropdown,
  Checkbox,
  Theme
} from '@carbon/react';
import { Add, Edit, TrashCan } from '@carbon/icons-react';

/**
 * Products CRUD Page
 * Converted from Hugo template to Carbon React v11
 * Original: content/crud/products.html
 */

interface Product {
  id: string;
  name: string;
  category: string;
  technology: string;
  description: string;
  price: string;
  discount: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Education Dashboard',
    category: 'Admin',
    technology: 'Flowbite',
    description: 'Start developing with an open-source library of over 450+ UI components',
    price: '$2999',
    discount: 'No'
  }
];

export default function Products() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const headers = [
    { key: 'name', header: 'Product Name' },
    { key: 'technology', header: 'Technology' },
    { key: 'description', header: 'Description' },
    { key: 'id', header: 'ID' },
    { key: 'price', header: 'Price' },
    { key: 'discount', header: 'Discount' },
    { key: 'actions', header: 'Actions' }
  ];

  const rows = products.map(product => ({
    id: product.id,
    name: (
      <div>
        <div style={{ fontWeight: 600 }}>{product.name}</div>
        <div style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)' }}>
          {product.category}
        </div>
      </div>
    ),
    technology: product.technology,
    description: product.description,
    price: product.price,
    discount: product.discount,
    actions: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button
          kind="primary"
          size="sm"
          renderIcon={Edit}
          onClick={() => {
            setSelectedProduct(product);
            setIsEditModalOpen(true);
          }}
        >
          Update
        </Button>
        <Button
          kind="danger"
          size="sm"
          renderIcon={TrashCan}
          onClick={() => {
            setSelectedProduct(product);
            setIsDeleteModalOpen(true);
          }}
        >
          Delete
        </Button>
      </div>
    )
  }));

  return (
    <Theme theme="g100">
      <div style={{ padding: '1rem', backgroundColor: 'var(--cds-layer-01)' }}>
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">E-commerce</BreadcrumbItem>
          <BreadcrumbItem href="#" isCurrentPage>Products</BreadcrumbItem>
        </Breadcrumb>

        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          margin: '1rem 0',
          color: 'var(--cds-text-primary)'
        }}>
          All products
        </h1>

        <DataTable rows={rows} headers={headers}>
          {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            getTableContainerProps,
            getToolbarProps,
            onInputChange,
            getSelectionProps,
            selectAll,
            selectRow,
            selectedRows
          }) => (
            <TableContainer {...getTableContainerProps()}>
              <TableToolbar {...getToolbarProps()}>
                <TableToolbarContent>
                  <TableToolbarSearch
                    onChange={onInputChange}
                    placeholder="Search for products"
                  />
                  <Button
                    kind="primary"
                    renderIcon={Add}
                    onClick={() => setIsAddModalOpen(true)}
                  >
                    Add new product
                  </Button>
                </TableToolbarContent>
              </TableToolbar>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    <TableHeader>
                      <Checkbox
                        {...getSelectionProps()}
                        id="select-all"
                        labelText=""
                      />
                    </TableHeader>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })} key={header.key}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow {...getRowProps({ row })} key={row.id}>
                      <TableCell>
                        <Checkbox
                          {...getSelectionProps({ row })}
                          id={`select-${row.id}`}
                          labelText=""
                        />
                      </TableCell>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>

        <div style={{ marginTop: '1rem' }}>
          <Pagination
            page={currentPage}
            pageSize={pageSize}
            pageSizes={[10, 20, 30, 40, 50]}
            totalItems={products.length}
            onChange={({ page, pageSize }) => {
              setCurrentPage(page);
              setPageSize(pageSize);
            }}
          />
        </div>
      </div>

      {/* Add Product Modal */}
      <Modal
        open={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        modalHeading="New Product"
        primaryButtonText="Add product"
        secondaryButtonText="Cancel"
      >
        <TextInput
          id="add-name"
          labelText="Name"
          placeholder="Type product name"
          style={{ marginBottom: '1rem' }}
        />
        <TextInput
          id="add-price"
          labelText="Price"
          placeholder="$2999"
          type="number"
          style={{ marginBottom: '1rem' }}
        />
        <Dropdown
          id="add-technology"
          titleText="Technology"
          label="Select category"
          items={['Flowbite', 'React', 'Angular', 'Vue']}
          style={{ marginBottom: '1rem' }}
        />
        <TextArea
          id="add-description"
          labelText="Description"
          placeholder="Enter product description"
          rows={4}
          style={{ marginBottom: '1rem' }}
        />
        <Dropdown
          id="add-discount"
          titleText="Discount"
          label="No"
          items={['No', '5%', '10%', '20%', '30%', '40%', '50%']}
        />
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        open={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        modalHeading="Update Product"
        primaryButtonText="Update"
        secondaryButtonText="Cancel"
        danger
      >
        {selectedProduct && (
          <>
            <TextInput
              id="edit-name"
              labelText="Name"
              defaultValue={selectedProduct.name}
              style={{ marginBottom: '1rem' }}
            />
            <Dropdown
              id="edit-technology"
              titleText="Technology"
              label={selectedProduct.technology}
              items={['Flowbite', 'React', 'Angular', 'Vue']}
              style={{ marginBottom: '1rem' }}
            />
            <TextInput
              id="edit-price"
              labelText="Price"
              defaultValue={selectedProduct.price}
              type="number"
              style={{ marginBottom: '1rem' }}
            />
            <TextArea
              id="edit-description"
              labelText="Description"
              defaultValue={selectedProduct.description}
              rows={4}
              style={{ marginBottom: '1rem' }}
            />
            <Dropdown
              id="edit-discount"
              titleText="Discount"
              label={selectedProduct.discount}
              items={['No', '5%', '10%', '20%', '30%', '40%', '50%']}
            />
          </>
        )}
      </Modal>

      {/* Delete Product Modal */}
      <Modal
        open={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        modalHeading="Delete item"
        primaryButtonText="Yes, I'm sure"
        secondaryButtonText="No, cancel"
        danger
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </Theme>
  );
}
