import React from "react";
import { toast } from "react-toastify";
import FavoriteService from "../../../services/favoriteService";
import { Button } from "semantic-ui-react";

export default function DeleteFavorite({favoriteId}) {
  let favoriteService = new FavoriteService();

  const deleteFavorite = (favoriteId) => {
    favoriteService
      .delete(favoriteId)
      .then(
        toast.success("İlan Favorilerden Çıkarıldı"),
        window.location.reload()
      );
  };
  return (
    <div>
      <Button icon="heart" inverted color="red" onClick={()=>deleteFavorite(favoriteId)}></Button>
    </div>
  );
}
