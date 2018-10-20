module objects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private verticalSpeed:number;
        private horizontalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("ocean");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.y >=0) {
                this.Reset();
            }
        }

        private _move():void {
            if (managers.Game.scoreBoard.Level == 1)
            {
            this.y += this.verticalSpeed;
            }
            if (managers.Game.scoreBoard.Level == 2)
            {
            this.x += this.horizontalSpeed;
            }
        }

        // public methods

        public Reset(): void {
            this.y = -960;
        }        
        
        public Start(): void {
            this.Reset();
            this.verticalSpeed = 5; // 5 px per frame
            this.horizontalSpeed = 5; 
            
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}