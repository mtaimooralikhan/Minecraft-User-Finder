import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import { Delete, StarBorder, Star } from "@material-ui/icons";
import "./PlayerList.css";

const useStyles = makeStyles((theme) => ({
  // card: {
  //   marginBottom: theme.spacing(2),
  // },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: "auto",
  },
  // actions: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
}));

interface Player {
  uuid: number;
  username: string;
  skin: string;
  isAdmin: boolean;
}

interface Props {
  players: Player[];
  onDelete: (id: number) => void;
  onPromote: (id: number) => void;
}

const PlayerList: React.FC<Props> = ({ players, onDelete, onPromote }) => {
  const classes = useStyles();

  return (
    <>
      {players.map((player: Player) => (
        <Card key={player.uuid} className="card">
          <CardHeader
            className="card-header"
            avatar={
              <Avatar
                src={`https://crafatar.com/renders/body/${player?.uuid}`}
                className={classes.avatar}
              />
            }
            title={player.username}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {player.isAdmin ? "Admin" : "Player"}
            </Typography>
          </CardContent>
          <div className="actions">
            <Tooltip title="Delete">
              <IconButton onClick={() => onDelete(player.uuid)}>
                <Delete />
              </IconButton>
            </Tooltip>
            <Tooltip title="Promote">
              <IconButton onClick={() => onPromote(player.uuid)}>
                {player.isAdmin ? <Star /> : <StarBorder />}
              </IconButton>
            </Tooltip>
          </div>
        </Card>
      ))}
    </>
  );
};

export default PlayerList;
