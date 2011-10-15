using System;
using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;
using System.Html.Media.Graphics;

namespace Superfluidity
{
    [GlobalMethods]
    internal static class Default
    {
        static Default()
        {
            jQuery.OnDocumentReady(delegate()
            {
                Start();
            });
        }

        private static void Start()
        {
            Player player = new Player(new Vector(0, 0), 45);

            World.InitTiles();

            //World.Tiles = new Tile[]
            //    {new Tile(4, 6, 1, 1),
            //    new Tile(1, 2, 2, 2),
            //    new Tile(6, 2, 1, 2),
            //    new Tile(3, 0, 1, 1)};

            Renderer.Instance = new Renderer();

            Renderer.Instance.RenderWorld(player);
        }
    }
}