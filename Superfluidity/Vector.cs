// Vector.cs
//

using System;
using System.Collections.Generic;

namespace Superfluidity
{
    public class Vector
    {
        public double X;
        public double Y;

        public Vector(double x, double y)
        {
            this.X = x;
            this.Y = y;
        }

        public double Abs()
        {
            return Math.Sqrt(this.X * this.X + this.Y * this.Y);
        }

        public double Angle()
        {
            double scale = 45 / Math.Atan(1);
            double angle = (scale * Math.Atan2 (this.Y, this.X));
            if(angle >= 0)
            {
                return angle;
            }

            return 360 + angle;
        }

        public void Alert(string name)
        {
            Script.Alert("A " + name + " vektor: " + this.X + ", " + this.Y);
        }

        public static double Dot(Vector v1, Vector v2)
        {
            return v1.X * v2.X + v1.Y * v2.Y;
        }

        public static double SmallerAngleBetween(Vector v1, Vector v2)
        {
            double diff = v1.Angle() - v2.Angle();
            if (diff < -180)
            {
                return diff + 360;
            }
            else if (diff > 180)
            {
                return diff - 360;
            }
            else
            {
                return diff;
            }
        }

        public static Vector Subtract(Vector v1, Vector v2)
        {
            return new Vector(v1.X - v2.X, v1.Y - v2.Y);
        }
    }
}
