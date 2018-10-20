module objects {
    export class Player extends objects.GameObject {
        // private instance variables
        
        // public properties
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.y = 435;
            if (managers.Game.scoreBoard.Level == 2)
            { 
                this.x = 30;
            }
            
        }

        public Update():void {
            if (managers.Game.scoreBoard.Level == 1)
            {
                this.x = managers.Game.stage.mouseX;
                this._updatePosition();

                // checks the right boundary
                if(this.x > 640 - this.HalfWidth) {
                    this.x = 640 - this.HalfWidth;
                }

                // check the left boundary
                if(this.x < this.HalfWidth) {
                    this.x = this.HalfWidth;
                }
            }
            if (managers.Game.scoreBoard.Level == 2)
            {   
                this.rotation = 90;
                this.y = managers.Game.stage.mouseY;
                this._updatePosition();

                // checks the right boundary
                if(this.y > 640 - this.HalfWidth) {
                    this.y = 640 - this.HalfWidth;
                }

                // check the left boundary
                if(this.y < this.HalfWidth) {
                    this.y = this.HalfWidth;
                }
            }
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}