// Renderer.cs
//

using System;
using System.Collections.Generic;
using jQueryApi;

namespace Superfluidity
{
    public class Player
    {
        public Player(double x, double y, double dir)
        {
            this.X = x;
            this.Y = y;
            this.Direction = dir;
        }

        public double X;
        public double Y;
        public double Direction;
    }
}
