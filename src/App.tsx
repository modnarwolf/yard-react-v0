import React, { useState } from "react";
import { Tile } from "./components/Tile";
import { TileContainer } from "./components/TileContainer";
import { SettingsMenu } from "./components/SettingsMenu";
import {
  Clock,
  MessageSquare,
  User,
  Users,
  HardDrive,
  Smartphone,
} from "lucide-react";

import {
  ClockTile,
  NotesTile,
  IdentityTile,
  ChatTile,
  FriendsTile,
  StorageTile,
  DevicesTile,
} from "./modules";

function App() {
  const [isDraggingEnabled, setIsDraggingEnabled] = useState(false);
  const [tileOrder, setTileOrder] = useState([
    "clock",
    "notes",
    "identity",
    "chat",
    "friends",
    "storage",
    "devices",
  ]);

  const handleReorder = (newOrder: string[]) => {
    setTileOrder(newOrder);
  };

  // Map tile IDs to their component
  const renderTileContent = (id: string) => {
    switch (id) {
      case "clock":
        return <ClockTile />;
      case "notes":
        return <NotesTile />;
      case "identity":
        return <IdentityTile />;
      case "chat":
        return <ChatTile />;
      case "friends":
        return <FriendsTile />;
      case "storage":
        return <StorageTile />;
      case "devices":
        return <DevicesTile />;
      default:
        return <div>Unknown tile</div>;
    }
  };

  const getTileIcon = (id: string) => {
    switch (id) {
      case "clock":
        return Clock;
      case "notes":
        return MessageSquare;
      case "identity":
        return User;
      case "chat":
        return MessageSquare;
      case "friends":
        return Users;
      case "storage":
        return HardDrive;
      case "devices":
        return Smartphone;
      default:
        return null;
    }
  };

  const getTileTitle = (id: string) => {
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">🌱</h1>
          <SettingsMenu
            isDraggingEnabled={isDraggingEnabled}
            setIsDraggingEnabled={setIsDraggingEnabled}
          />
        </div>

        <TileContainer items={tileOrder} onItemsReorder={handleReorder}>
          {tileOrder.map((id) => (
            <Tile
              key={id}
              id={id}
              title={getTileTitle(id)}
              isDraggingEnabled={isDraggingEnabled}
            >
              {renderTileContent(id)}
            </Tile>
          ))}
        </TileContainer>
      </div>
    </div>
  );
}

export default App;
