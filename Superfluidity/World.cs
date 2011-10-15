using System;
using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;
using System.Html.Media.Graphics;

namespace Superfluidity
{
    public static class World
    {
        public static Tile[] Tiles;

        internal static void InitTiles()
        {
            bool flip = true;
            int cnt = 0;
            Tiles = new Tile[45];

            for (int i = -10; i < 10; i++)
            {
                for (int j = -10; j < 9; j++)
                {
                    if (flip)
                    {
                        Tile tile = new Tile(i, j, 1, 1);
                        Tiles[cnt++] = tile;
                    }

                    flip = !flip;
                }
            }
        }
    }
}
