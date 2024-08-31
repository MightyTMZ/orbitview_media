import React, { useState } from "react";
import "./Search.css";

const ArticleSearchAndFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dateRange, setDateRange] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleDateRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDateRange(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="technology">Technology</option>
            <option value="economics">Economics</option>
            <option value="career">Career Development</option>
            <option value="education">Education</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={dateRange}
            onChange={handleDateRangeChange}
          >
            <option value="">Any Time</option>
            <option value="24hours">Last 24 hours</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ArticleSearchAndFilters;
