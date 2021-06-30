import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FavoriteService from "../../../services/favoriteService";
import { Card, Header, Icon, Image, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import DeleteFavorite from "./DeleteFavorite";

export default function FavoriteList() {
  let { jobseekerId } = useParams();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let favoriteService = new FavoriteService();
    favoriteService
      .getByJobseekerId(jobseekerId)
      .then((result) => setFavorites(result.data.data));
  });
  return (
    <div>
      <Header className="app" as="h2" icon textAlign="left">
        <Header.Content>FAVORİ İŞ İLANLARINIZ</Header.Content>
      </Header>
      <Card.Group>
        {favorites.map((favorite) => (
          <Card color="yellow" fluid>
            <Card.Header textAlign="right">
              Favorilerden Çıkar
              <DeleteFavorite favoriteId={favorite.favoriteId}></DeleteFavorite>
            </Card.Header>
            <Card.Content
              as={NavLink}
              to={`/jobpostings/${favorite.jobPosting.jobPostingId}`}
            >
              {!favorite.jobPosting.employer.image ? (
                <Image
                  rounded
                  floated="left"
                  size="tiny"
                  src="https://aday-spage.mncdn.com/Knet_img_bag-with-gray-bg.832c700.svg?v=p0611211353224"
                ></Image>
              ) : (
                <Image
                  rounded
                  floated="left"
                  size="tiny"
                  src={favorite.jobPosting.employer.image.imageUrl}
                ></Image>
              )}

              <Card.Header>
                {favorite.jobPosting.jobPosition.positionName}
              </Card.Header>
              <Card.Meta>{favorite.jobPosting.employer.companyName}</Card.Meta>
              <Card.Meta>{favorite.jobPosting.workTime.workTime}</Card.Meta>
              <Card.Description>
                <Icon name="map marker alternate" />
                {favorite.jobPosting.city.name}
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
