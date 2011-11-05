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
            Game game = new Game();

            game.Start();
        }
    }
}