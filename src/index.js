import React, { useEffect } from "react";
import "./styles/index.scss";
import Accordion from "./components/accordion";
import AppBar from "./components/appbar";
import AppHeader from "./components/appheader";
import AutoComplete from "./components/autocomplete";
import Avatar from "./components/avatar";
import { BottomNavigation, BottomNavItem } from "./components/bottomnavigation";
import Breadcrumb from "./components/breadcrumb";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Chip from "./components/Chip";
import Column from "./components/column";
import DatePicker from "./components/datepicker";
import Dialog from "./components/dialog";
import FloatingButton from "./components/floatingbutton";
import Link from "./components/link";
import { MenuDropdown, MenuItem } from "./components/menudropdown";
import Text from "./components/text";

export const UiProvidor = ({ children }) => {
  useEffect(() => {
    var imported = document.createElement("script");
    imported.src = "https://kit.fontawesome.com/c8ad5d74ba.js";
    imported.crossOrigin = "anonymous";
    document.head.appendChild(imported);
  }, []);
  return <div className='_ui-providor'>{children}</div>;
};

export {
  Accordion,
  AppBar,
  AppHeader,
  AutoComplete,
  Avatar,
  BottomNavigation,
  BottomNavItem,
  Breadcrumb,
  Button,
  Checkbox,
  Chip,
  Column,
  DatePicker,
  Dialog,
  FloatingButton,
  Link,
  MenuDropdown,
  MenuItem,
  //
  Text
};
