module objects {
    export class Island extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("island");

            this.Start();
        }

        // private methods
        private _move():void {
            if (managers.Game.scoreBoard.Level == 1)
            {
            this.y += this._verticalSpeed;
            }
            if (managers.Game.scoreBoard.Level == 2)
            {
                this.x -= this._horizontalSpeed;
            }
            
            this._updatePosition();
        }

        private _checkBounds():void {
            if (managers.Game.scoreBoard.Level == 1)
            {
                if(this.y > 480 + this.Height) {
                    this.Reset();
                }
            }
            if (managers.Game.scoreBoard.Level == 2)
            {
                if(this.x < 0 + this.Width){
                    this.Reset();
                }
            }
        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = 5;
            this._horizontalSpeed = 5;
            if (managers.Game.scoreBoard.Level == 1)
            {
                this.y = -this.Height;
                this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
                this.IsColliding = false;
            }
            if (managers.Game.scoreBoard.Level == 2)
            {
                this.x = this.Width;
                this.x = Math.floor((Math.random() * (480 - this.Height)) + this.HalfHeight);
                this.IsColliding = false;
            }
        }        
        
        public Start(): void {
            // if (managers.Game.scoreBoard.Level == 1)
            // {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            // }
            // if (managers.Game.scoreBoard.Level == 2)
            // {

            // }
            this.Reset();
            
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}