import React from "react";

import AsideCard from "./asideCar";
import ListItem from "../../ListItem";


export default function AsideBar () {
    return (
      <section className="my-5">
        <AsideCard>
          <header className="d-flex justify-content-between">
            <h5>Listings</h5>
            <ListItem text="See all" type="anchor" url="/#" />
          </header>
          <hr />
          <ul>
            <ListItem
              text="Walkthrough Wednesday with Gant Laborde"
              url="/#"
              styles=" w-100"
            >
              <p className="text-muted">events</p>
            </ListItem>
            <ListItem
              text="Walkthrough Wednesday with Gant Laborde"
              type="listItem"
              url="/#"
            >
              <p className="text-muted">education</p>
            </ListItem>
          </ul>
        </AsideCard>
      </section>
    );
  }

