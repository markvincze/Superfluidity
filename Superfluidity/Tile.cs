// Tile.cs
//

using System;
using System.Collections.Generic;

namespace Superfluidity
{
    public class Tile
    {
        private Vector corner1;

        private Vector corner2;

        private Vector corner3;

        private Vector corner4;

        public Tile(double x, double y, double width, double height)
        {
            corner1 = new Vector(x, y);
            corner2 = new Vector(x, y + height);
            corner3 = new Vector(x + width, y + height);
            corner4 = new Vector(x + width, y);
        }

        public Vector GetCorner1()
        {
            return corner1;
        }

        public Vector GetCorner2()
        {
            return corner2;
        }

        public Vector GetCorner3()
        {
            return corner3;
        }

        public Vector GetCorner4()
        {
            return corner4;
        }
    }
}
