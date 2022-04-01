import React from "react";
import "./MainMenu.css";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import StarIcon from "@mui/icons-material/Star";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import pic from "./salad3.jpg";

const MainMenu = () => {
  return (
    <div className="main_div">
      <div className="sidebar">
        <div className="menu_tab">
          <div className="logo">
            <MenuBookRoundedIcon />
          </div>
          <div className="sidebar_text"> MENU </div>
        </div>
      </div>
      <div className="main_menu">
        <button className="btn filter btn-round-2" type="disabled">
          {" "}
          <FilterListIcon /> Filter
        </button>
        <div className="sort">
          {" "}
          <div className="sort_title">Sort By: </div>
          <div className="dropdown">
            <button className="dropbtn">Recommended</button>
            <div className="dropdown-content">
              <a href="#">Recommended</a>
              <a href="#">Price</a>
              <a href="#">Rating</a>
            </div>
          </div>
        </div>
        <div className="card_column">
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Cabbage Salad | 250g</div>
            <div className="item_price">$4.99 </div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Noodle Salad | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Vegetable Mix | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
        <div className="card_column">
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Seafood Soup | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Bean Soup | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Stewed Vegetables | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
        <div className="card_column">
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Chicken Soup | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Roasted Potatoes | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="card">
            <div className="ratings">
              <StarIcon sx={{ fontSize: 15, color: "yellow" }} />
              4.2
            </div>
            <div className="card_image">
              <img src={pic} alt="" />
            </div>
            <div className="card_item">Chicken Steak | 250g</div>
            <div className="item_price">$4.99</div>
            <div className="add_item">
              <AddCircleIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="cart">
        My Order
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.25,
            borderColor: "#000000",
            width: 450,
          }}
        />
        <div className="order_details">
          <div className="dish">
            <div>Bean Soup</div> $4.20
          </div>
          <div className="dish">
            {" "}
            <div>Noodle Salad</div> $6.30
          </div>
          <div className="dish">
            {" "}
            <div>Roast Potatoes</div> $4.99
          </div>

          <div className="order_total">
            <div>Total</div>
            <div>$15.49</div>
          </div>

          <button className="btn btn-success btn-round-2">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
