// Renderer.cs
//

using System;
using System.Collections.Generic;
using System.Html.Media.Graphics;
using System.Html;

namespace Superfluidity
{
    public class Renderer
    {
        const int MinimapBlockSize = 10;

        private CanvasContext2D ctx;
        private CanvasContext2D minimapCtx;
        private CanvasElement minimapCanvas;

        private Game game;

        public Renderer(Game game)
        {
            this.game = game;

            CanvasElement can = Document.GetElementById("canvas").As<CanvasElement>();
            this.ctx = (CanvasContext2D)can.GetContext(Rendering.Render2D);
            this.initializeMinimap();
        }

        private void initializeMinimap()
        {
            this.minimapCanvas = Document.GetElementById("minimapCanvas").As<CanvasElement>();

            this.minimapCanvas.Width = this.game.Map.GetWidth() * Renderer.MinimapBlockSize;
            this.minimapCanvas.Height = this.game.Map.GetHeight() * Renderer.MinimapBlockSize;
            this.minimapCanvas.Style.Width = this.minimapCanvas.Width.ToString() + "px";
            this.minimapCanvas.Style.Height = this.minimapCanvas.Height.ToString() + "px";

            this.minimapCtx = (CanvasContext2D)this.minimapCanvas.GetContext(Rendering.Render2D);
        }

        internal void DrawMinimap()
        {
            this.clearMinimap();

            this.drawMapOnMinimap();

            this.drawPlayerOnMinimap();
        }

        private void clearMinimap()
        {
            this.minimapCtx.ClearRect(0, 0, this.minimapCanvas.Width, this.minimapCanvas.Height);
        }

        private void drawMapOnMinimap()
        {
            for (int y = 0; y < this.game.Map.GetHeight(); y++)
            {
                for (int x = 0; x < this.game.Map.GetWidth(); x++)
                {
                    int tile = this.game.Map.Tiles[y][x];

                    if (tile > 0)
                    {
                        this.minimapCtx.FillStyle = this.getTileFillStyle(tile);
                        this.minimapCtx.FillRect(
                            x * Renderer.MinimapBlockSize,
                            y * Renderer.MinimapBlockSize,
                            Renderer.MinimapBlockSize,
                            Renderer.MinimapBlockSize);
                    }
                }
            }
        }

        private void drawPlayerOnMinimap()
        {
            Player player = this.game.player;

            this.minimapCtx.FillStyle = "rgb(10, 10, 10)";
            this.minimapCtx.FillRect(player.X * Renderer.MinimapBlockSize - 2, player.Y * MinimapBlockSize - 2, 4, 4);

            this.minimapCtx.BeginPath();
            this.minimapCtx.MoveTo(player.X * Renderer.MinimapBlockSize, player.Y * Renderer.MinimapBlockSize);
            this.minimapCtx.LineTo(
                (player.X + Math.Cos(player.Direction) * 3) * Renderer.MinimapBlockSize,
                (player.Y + Math.Sin(player.Direction) * 3) * Renderer.MinimapBlockSize);
            this.minimapCtx.ClosePath();
            this.minimapCtx.Stroke();
        }

        private object getTileFillStyle(int tile)
        {
            switch(tile)
            {
                case 1: return "rgb(100, 100, 100)";
                case 2: return "rgb(200, 200, 200)";
                default: return "akármi"; // lehet dobni kivételt?
            }
        }
    }
}
