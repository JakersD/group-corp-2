class Status {
    public condition: string = '';

    constructor() {
        this.setPaused();
    }
    setPaused() {
        this.condition = 'pause';
    }
    setPlaying() {
        this.condition = 'play';
    }
    isPlaying() {
        return this.condition === 'play';
    }
    isPaused() {
        return this.condition === 'pause';
    }
}

export default Status; 