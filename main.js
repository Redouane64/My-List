function Entry(title) {
    let self = this;
    self.title = title;
};

function MyListViewModel() {
    let self = this;
    self.entry = ko.observable();
    self.list = ko.observableArray([
        new Entry("Say Hello."),
        new Entry("Learn KO!"),
        new Entry("Be nice to people.")
    ]);
    self.add = function (data) {
        self.list.push(new Entry(data.entry.value));
        self.entry("");
    };
    self.remove = function (data) {
        self.list.remove(data);
    }
};

ko.applyBindings(new MyListViewModel());
