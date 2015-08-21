import {Firebase} from 'firebase/firebase';
import {Injectable} from 'angular2/angular2';

const connection = new Firebase('https://hacker-news.firebaseio.com/v0/');

@Injectable()
export class HNApi {
  itemStore: Object;
  userStore: Object;
  topStories: Array;

  constructor() {
    this.itemStore = {};
    this.userStore = {};
  }

  fetchTopStories() {
    return new Promise((resolve) => {
      HNApi.topStoriesRef().once('value', snapshot => {
        this.topStories = snapshot.val().splice(0, 20);

        resolve(this.topStories);
      });
    });
  }

  fetchItems(items = []) {
    return new Promise(resolve => {
      let promises = [];

      items.forEach(itemId => {
        promises.push(new Promise((resolveItem) => {
          HNApi.itemRef(itemId).on('value', value => {
            this.itemStore[itemId] = value.val();

            resolveItem(this.itemStore[itemId]);
          });
        }));
      });

      Promise.all(promises).then(resolve);
    });
  }

  fetchItem(item) {
    if (!item) {
      return Promise.reject(item);
    }

    return this.fetchItems([item]).then(data => data[0]);
  }

  fetchUser(userId) {
    if (!userId) {
      return Promise.reject(userId);
    }

    return new Promise(resolve => {
      HNApi.userRef(userId).on('value', value => {
        this.userStore[userId] = value.val();

        resolve(this.userStore[userId]);
      });
    });
  }

  static topStoriesRef() {
    return connection.child('topstories/');
  }

  static itemRef(itemId) {
    return connection.child('item/' + itemId);
  }

  static userRef(userId) {
    return connection.child('user/' + userId);
  }
}
