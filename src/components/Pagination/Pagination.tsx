"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import styles from "./Pagination.module.scss";


interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  // const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    // const url = createPageURL(page);
    // router.push(url);
  };

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Link
          key={i}
          href={createPageURL(i)}
          onClick={() => handlePageClick(i)}
          className={`${styles.btn} ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </Link>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.btn}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.btn}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
