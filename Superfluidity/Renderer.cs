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
        public static Renderer Instance;

        public Renderer()
        {
            CanvasElement can = Document.GetElementById("canvas").As<CanvasElement>();
            this.ctx = (CanvasContext2D)can.GetContext(Rendering.Render2D);
        }

        private CanvasContext2D ctx;

        public void RenderWorld(Player player)
        {
            this.clearCanvas();

            for (int i = 0; i < World.Tiles.Length; i++)
            {
                Tile tile = World.Tiles[i];

                if (player.CanSee(tile))
                {
                    Vector p1 = convertToViewportPoint(tile.GetCorner1(), player);
                    Vector p2 = convertToViewportPoint(tile.GetCorner2(), player);
                    Vector p3 = convertToViewportPoint(tile.GetCorner3(), player);
                    Vector p4 = convertToViewportPoint(tile.GetCorner4(), player);

                    this.drawSquare(p1, p2, p3, p4);
                }
            }
        }

        public Vector convertToViewportPoint(Vector point, Player player)
        {
            Vector playerToPoint = new Vector(point.X - player.Position.X, point.Y - player.Position.Y);

            double viewportX = this.calculateViewportX(playerToPoint, player);

            double viewportY = this.calculateViewportY(playerToPoint, player);

            return new Vector(viewportX * 429, viewportY * 429);
        }

        private double calculateViewportX(Vector playerToPoint, Player player)
        {
            double cosGammaInv = (playerToPoint.Abs() * player.DirectionVector.Abs()) / (Vector.Dot(playerToPoint, player.DirectionVector));

            double c = Math.Sqrt(Math.Abs((cosGammaInv * cosGammaInv) - 1));

            double angleDiff = Vector.SmallerAngleBetween(player.DirectionVector, playerToPoint);

            if (angleDiff > 0)
            {
                return 0.7 + c;
            }
            else
            {
                return 0.7 - c;
            }
        }

        private double calculateViewportY(Vector playerToPoint, Player player)
        {
            double groundDistance = playerToPoint.Abs();

            double y = 1.4 - (((groundDistance - 1) / groundDistance) - 0.3);

            return y;
        }

        private void drawSquare(Vector p1, Vector p2, Vector p3, Vector p4)
        {
            this.ctx.FillStyle = "#0f0";

            this.ctx.BeginPath();
            this.ctx.MoveTo(p1.X, p1.Y);
            this.ctx.LineTo(p2.X, p2.Y);
            this.ctx.LineTo(p3.X, p3.Y);
            this.ctx.LineTo(p4.X, p4.Y);
            this.ctx.LineTo(p1.X, p1.Y);

            this.ctx.Fill();
            this.ctx.ClosePath();
        }

        private void clearCanvas()
        {
            this.ctx.ClearRect(0, 0, 600, 600);            
        }
    }
}
