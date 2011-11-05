using System;
using System.Collections.Generic;
using System.Linq;

namespace Superfluidity
{
    public class Game
    {
        public Map Map;
        public Player player;

        private Renderer renderer;

        public Game()
        {
            this.Map = new Map();
            this.renderer = new Renderer(this);

            this.player = new Player(5, 7, 1);
        }

        public void Start()
        {
            renderer.DrawMinimap();
        }
    }
}
