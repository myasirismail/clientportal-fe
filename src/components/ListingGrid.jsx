import * as React from "react";
import { DataGrid, GridPagination } from "@mui/x-data-grid";
import theme from "../Pages/LayoutPage/theme";
import Pagination from "@mui/material/Pagination";
import notFound from "../assets/not-found.svg";

export default function ListingGrid({
  columns,
  gridData,
  pageChange,
  columnSort,
  loader,
  onRowClick,
}) {
  function MPagination({ page, onPageChange, className }) {
    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        className={className}
        count={gridData?.totalPages || 0}
        page={page + 1}
        onChange={(event, newPage) => {
          onPageChange(event, newPage - 1);
        }}
      />
    );
  }
  function newPagination(props) {
    return <GridPagination ActionsComponent={MPagination} {...props} />;
  }
  function CustomNoRowsOverlay() {
    return (
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <img src={notFound} />
        <p>No Data Found</p>
      </div>
    );
  }
  return (
    <DataGrid
      rows={gridData?.data && gridData?.data.length > 0 ? gridData?.data : []}
      getRowId={(row) => row?.id ?? row?.rowIndex}
      sx={{
        height: 540,
        width: "100%",
        fontFamily: "'Poppins', 'Public Sans', sans-serif",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.secondary.main,
          color: "white",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          // whiteSpace: "normal !important",
          // lineHeight: 1.3,
          // textAlign: "center",
        },
        "& .MuiDataGrid-sortIcon": {
          color: "white",
        },
        "& .css-ptiqhd-MuiSvgIcon-root": {
          color: "white",
        },
        "& .MuiDataGrid-columnSeparator": {
          visibility: "hidden !important",
        },
        "& .MuiDataGrid-cell": {
          whiteSpace: "normal !important",
          wordBreak: "break-all",
        },
        cursor: "pointer",
      }}
      columns={columns}
      rowSelection={false}
      onCellClick={(rowData) => onRowClick(rowData)}
      loading={loader}
      pagination
      slots={{
        pagination: newPagination,
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10 },
        },
      }}
      rowHeight={45}
      paginationMode="server"
      sortingMode="server"
      // disableColumnMenu={true}
      onPaginationModelChange={pageChange}
      onSortModelChange={columnSort}
      pageSizeOptions={[10, 20, 30]}
      rowCount={gridData?.totalRecords || 0}
      localeText={{ noRowsLabel: "No Data Found" }}
    />
  );
}
