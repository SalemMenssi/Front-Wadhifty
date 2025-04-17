import React from "react";
import "./Style.css";
import location from "../Assets/Icons/Icon (Stroke).svg";
import categorie from "../Assets/Icons/li_clipboard-list.svg";
import search from "../Assets/Icons/search.svg";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();

  const handleSearch = () => {
    alert(t("searchbar.alert"));
  };

  return (
    <div className="search-bar">
      <img src={location} alt="icon" />
      <select className="search-select">
        <option value="">{t("searchbar.select_location")}</option>
        <option value="dubai">{t("searchbar.location_dubai")}</option>
        <option value="riyadh">{t("searchbar.location_riyadh")}</option>
        <option value="doha">{t("searchbar.location_doha")}</option>
        <option value="amman">{t("searchbar.location_amman")}</option>
        <option value="beirut">{t("searchbar.location_beirut")}</option>
      </select>
      <span></span>
      <img src={categorie} alt="icon" />
      <select className="search-select">
        <option value="">{t("searchbar.select_category")}</option>
        <option value="it">{t("searchbar.category_it")}</option>
        <option value="engineering">
          {t("searchbar.category_engineering")}
        </option>
        <option value="healthcare">{t("searchbar.category_healthcare")}</option>
        <option value="education">{t("searchbar.category_education")}</option>
        <option value="finance">{t("searchbar.category_finance")}</option>
      </select>
      <button className="search-button" onClick={handleSearch}>
        <img src={search} alt="icon" />
        {t("searchbar.search_button")}
      </button>
    </div>
  );
};

export default SearchBar;
