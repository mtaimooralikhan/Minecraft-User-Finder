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
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>{player.name}</TableCell>
              <TableCell>
                <Avatar
                  alt={player.name}
                  src={`https://crafatar.com/avatars/${player.skin}?size=32`}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlayerList;
