// Renderer.cs
//

using System;
using System.Collections.Generic;
using jQueryApi;

namespace Superfluidity
{
    public class Player
    {
        public Vector Position;
        public double DirectionAngle;

        public Vector DirectionVector;

        public Player(Vector position, double directionAngle)
        {
            this.DirectionAngle = directionAngle;

            double angleRadian = directionAngle * Math.PI / 180;

            this.Position = position;

            this.DirectionVector = new Vector(Math.Cos(angleRadian), Math.Sin(angleRadian));

            this.initMoveHandlers();
        }

        private void modifyPos(int posX, int posY)
        {
            this.Position.X = posX;
            this.Position.Y = posY;

            Renderer.Instance.RenderWorld(this);
        }

        private void modifyDirection(double directionAngle)
        {
            this.DirectionAngle = directionAngle;

            double angleRadian = directionAngle * Math.PI / 180;

            this.DirectionVector.X = Math.Cos(angleRadian);
            this.DirectionVector.Y = Math.Sin(angleRadian);

            Renderer.Instance.RenderWorld(this);
        }

        private void moveForward()
        {
            this.Position.X = this.Position.X + this.DirectionVector.X * 0.1;
            this.Position.Y = this.Position.Y + this.DirectionVector.Y * 0.1;
        }

        private void moveBackward()
        {
            this.Position.X = this.Position.X - this.DirectionVector.X * 0.1;
            this.Position.Y = this.Position.Y - this.DirectionVector.Y * 0.1;
        }

        private void turnLeft()
        {
            this.modifyDirection(this.DirectionAngle + 3);
        }

        private void turnRight()
        {
            this.modifyDirection(this.DirectionAngle - 3);
        }

        private void initMoveHandlers()
        {
            jQuery.Document.Keydown(null, delegate(jQueryEvent e)
            {
                switch ((KeyCodes)e.Which)
                {
                    case KeyCodes.up_arrow:
                    case KeyCodes.w:
                        this.moveForward();
                        break;

                    case KeyCodes.down_arrow:
                    case KeyCodes.s:
                        this.moveBackward();
                        break;

                    case KeyCodes.right_arrow:
                    case KeyCodes.d:
                        this.turnRight();
                        break;

                    case KeyCodes.left_arrow:
                    case KeyCodes.a:
                        this.turnLeft();
                        break;
                }

                Renderer.Instance.RenderWorld(this);
            });
        }

        public bool CanSee(Tile tile)
        {
            return Math.Abs(Vector.SmallerAngleBetween(Vector.Subtract(tile.GetCorner1(), this.Position), this.DirectionVector)) < 45
                || Math.Abs(Vector.SmallerAngleBetween(Vector.Subtract(tile.GetCorner2(), this.Position), this.DirectionVector)) < 45
                || Math.Abs(Vector.SmallerAngleBetween(Vector.Subtract(tile.GetCorner3(), this.Position), this.DirectionVector)) < 45
                || Math.Abs(Vector.SmallerAngleBetween(Vector.Subtract(tile.GetCorner4(), this.Position), this.DirectionVector)) < 45;
        }
    }
}
