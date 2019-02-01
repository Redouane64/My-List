function Entry(title, date) {
    let self = this;
    self.title = title;
    self.date = date;
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
        self.list.push(new Entry(data.entry.value, new Date()));
        self.entry("");
    };
    self.remove = function (data) {
        self.list.remove(data);
    }
};

ko.applyBindings(new MyListViewModel());
