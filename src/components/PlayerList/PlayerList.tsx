import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { Delete, Star } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  avatar: {
    width: 50,
    height: 50,
  },
});

interface Player {
  id: number;
  name: string;
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
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="player table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player: any) => {
            console.log(player);
            return (
              <TableRow key={player?.uuid}>
                <TableCell>{player.username}</TableCell>
                <TableCell>
                  <Avatar
                    alt={player.username}
                    src={`https://crafatar.com/skins/${player?.uuid}`}
                    className={classes.avatar}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => onDelete(player.id)}>
                    <Delete />
                  </IconButton>
                  <IconButton onClick={() => onPromote(player.id)}>
                    <Star color={player.isAdmin ? "secondary" : "action"} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayerList;
